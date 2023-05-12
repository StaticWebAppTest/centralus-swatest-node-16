module.exports = async function (context, req) {
  const date = "2023-05-12T06:11:25.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

