module.exports = async function (context, req) {
  const date = "2023-10-04T15:09:25.248Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

