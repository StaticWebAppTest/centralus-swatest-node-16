module.exports = async function (context, req) {
  const date = "2024-08-11T09:11:04.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

