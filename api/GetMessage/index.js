module.exports = async function (context, req) {
  const date = "2022-06-10T07:11:35.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

