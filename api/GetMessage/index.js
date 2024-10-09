module.exports = async function (context, req) {
  const date = "2024-10-09T11:10:24.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

