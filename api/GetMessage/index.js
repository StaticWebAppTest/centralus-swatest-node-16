module.exports = async function (context, req) {
  const date = "2022-11-16T10:11:37.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

