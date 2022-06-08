module.exports = async function (context, req) {
  const date = "2022-06-08T14:09:46.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

