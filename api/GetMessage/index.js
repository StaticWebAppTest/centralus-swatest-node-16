module.exports = async function (context, req) {
  const date = "2023-10-11T18:11:42.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

