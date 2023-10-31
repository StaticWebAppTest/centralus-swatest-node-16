module.exports = async function (context, req) {
  const date = "2023-10-31T08:11:50.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

