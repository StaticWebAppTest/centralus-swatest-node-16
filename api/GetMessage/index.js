module.exports = async function (context, req) {
  const date = "2023-05-16T11:07:04.540Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

