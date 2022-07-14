module.exports = async function (context, req) {
  const date = "2022-07-14T11:09:09.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

