module.exports = async function (context, req) {
  const date = "2023-10-10T13:12:07.539Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

