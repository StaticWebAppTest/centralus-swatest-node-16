module.exports = async function (context, req) {
  const date = "2022-12-10T11:07:32.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

