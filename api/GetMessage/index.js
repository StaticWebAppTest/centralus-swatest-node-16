module.exports = async function (context, req) {
  const date = "2022-03-12T00:39:07.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

