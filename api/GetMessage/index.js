module.exports = async function (context, req) {
  const date = "2023-01-04T18:12:13.863Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

