module.exports = async function (context, req) {
  const date = "2023-10-13T10:09:45.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

