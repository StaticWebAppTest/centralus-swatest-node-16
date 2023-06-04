module.exports = async function (context, req) {
  const date = "2023-06-04T18:10:16.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

