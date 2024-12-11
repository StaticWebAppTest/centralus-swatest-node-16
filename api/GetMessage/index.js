module.exports = async function (context, req) {
  const date = "2024-12-11T11:10:43.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

