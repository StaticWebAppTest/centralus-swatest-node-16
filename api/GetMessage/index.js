module.exports = async function (context, req) {
  const date = "2024-05-03T13:10:50.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

