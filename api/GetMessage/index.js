module.exports = async function (context, req) {
  const date = "2023-12-12T18:11:53.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

