module.exports = async function (context, req) {
  const date = "2022-07-06T09:11:18.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

