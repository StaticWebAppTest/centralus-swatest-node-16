module.exports = async function (context, req) {
  const date = "2022-12-12T07:09:47.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

