module.exports = async function (context, req) {
  const date = "2024-10-11T15:11:43.869Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

