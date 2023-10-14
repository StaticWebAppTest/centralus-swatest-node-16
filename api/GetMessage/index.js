module.exports = async function (context, req) {
  const date = "2023-10-14T14:07:06.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

