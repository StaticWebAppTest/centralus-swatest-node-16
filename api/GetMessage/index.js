module.exports = async function (context, req) {
  const date = "2022-06-25T09:09:35.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

