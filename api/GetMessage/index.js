module.exports = async function (context, req) {
  const date = "2022-08-13T09:10:07.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

