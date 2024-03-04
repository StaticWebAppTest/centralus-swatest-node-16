module.exports = async function (context, req) {
  const date = "2024-03-04T11:21:01.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

