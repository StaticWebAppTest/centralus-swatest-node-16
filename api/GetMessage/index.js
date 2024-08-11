module.exports = async function (context, req) {
  const date = "2024-08-11T08:12:33.659Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

