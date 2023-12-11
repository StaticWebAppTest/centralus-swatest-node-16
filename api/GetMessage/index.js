module.exports = async function (context, req) {
  const date = "2023-12-11T11:08:25.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

