module.exports = async function (context, req) {
  const date = "2023-09-13T11:07:08.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

