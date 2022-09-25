module.exports = async function (context, req) {
  const date = "2022-09-25T09:12:28.174Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

