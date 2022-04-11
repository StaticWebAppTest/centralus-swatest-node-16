module.exports = async function (context, req) {
  const date = "2022-04-11T04:14:19.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

