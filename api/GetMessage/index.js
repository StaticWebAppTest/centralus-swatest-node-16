module.exports = async function (context, req) {
  const date = "2022-08-16T18:16:52.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

