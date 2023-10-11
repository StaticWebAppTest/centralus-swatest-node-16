module.exports = async function (context, req) {
  const date = "2023-10-11T06:12:39.659Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

