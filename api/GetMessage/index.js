module.exports = async function (context, req) {
  const date = "2022-06-10T03:45:21.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

