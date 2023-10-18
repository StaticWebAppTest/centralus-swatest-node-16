module.exports = async function (context, req) {
  const date = "2023-10-18T17:08:20.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

