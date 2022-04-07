module.exports = async function (context, req) {
  const date = "2022-04-07T17:13:07.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

