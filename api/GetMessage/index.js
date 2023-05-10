module.exports = async function (context, req) {
  const date = "2023-05-10T11:07:14.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

