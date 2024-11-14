module.exports = async function (context, req) {
  const date = "2024-11-14T11:09:54.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

