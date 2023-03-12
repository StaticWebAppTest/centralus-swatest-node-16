module.exports = async function (context, req) {
  const date = "2023-03-12T06:11:57.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

