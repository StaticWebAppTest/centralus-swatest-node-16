module.exports = async function (context, req) {
  const date = "2023-07-11T12:20:19.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

