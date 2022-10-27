module.exports = async function (context, req) {
  const date = "2022-10-27T13:40:43.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

