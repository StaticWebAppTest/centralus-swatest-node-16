module.exports = async function (context, req) {
  const date = "2024-12-10T11:11:01.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

