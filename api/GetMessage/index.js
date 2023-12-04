module.exports = async function (context, req) {
  const date = "2023-12-04T07:09:04.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

