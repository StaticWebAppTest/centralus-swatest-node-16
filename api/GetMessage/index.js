module.exports = async function (context, req) {
  const date = "2023-09-08T15:07:18.539Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

