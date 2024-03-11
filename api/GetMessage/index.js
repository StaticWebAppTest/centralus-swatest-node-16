module.exports = async function (context, req) {
  const date = "2024-03-11T09:10:35.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

