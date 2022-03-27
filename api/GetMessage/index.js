module.exports = async function (context, req) {
  const date = "2022-03-27T21:09:25.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

