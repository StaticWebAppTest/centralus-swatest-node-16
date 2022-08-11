module.exports = async function (context, req) {
  const date = "2022-08-11T04:19:07.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

