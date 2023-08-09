module.exports = async function (context, req) {
  const date = "2023-08-09T18:11:39.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

