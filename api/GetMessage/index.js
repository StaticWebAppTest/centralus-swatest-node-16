module.exports = async function (context, req) {
  const date = "2022-03-28T12:18:20.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

