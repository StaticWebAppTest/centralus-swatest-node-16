module.exports = async function (context, req) {
  const date = "2023-12-03T14:07:33.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

