module.exports = async function (context, req) {
  const date = "2023-09-10T18:09:37.374Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

