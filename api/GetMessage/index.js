module.exports = async function (context, req) {
  const date = "2024-11-20T11:10:15.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

