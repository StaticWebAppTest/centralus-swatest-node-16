module.exports = async function (context, req) {
  const date = "2023-11-11T08:10:28.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

